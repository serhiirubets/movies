import {Injectable, UnauthorizedException} from '@nestjs/common';
import {AuthDto} from './dto/auth.dto';
import {InjectModel} from 'nestjs-typegoose';
import {UserModel} from './user.model';
import {ModelType} from '@typegoose/typegoose/lib/types';
import {compare, genSaltSync, hashSync} from 'bcryptjs';
import {USER_NOT_FOUND_ERROR, WRONG_PASSWORD_ERROR} from './auth.constants';
import {JwtService} from '@nestjs/jwt';


@Injectable()
export class AuthService {
  constructor(
    @InjectModel(UserModel) private readonly userModel: ModelType<UserModel>,
    private readonly jwtService: JwtService
  ) {
  }

  createUser(dto: AuthDto) {
    const salt = genSaltSync(10);
    const newUser = new this.userModel({
      email: dto.login,
      passwordHash: hashSync(dto.password, salt)
    });

    return newUser.save();
  }

  findUser(email: string) {
    return this.userModel.findOne({ email }).exec();
  }

  async validateUser(email: string, password: string): Promise<Pick<UserModel, 'email'>> {
    const user = await this.findUser(email);

    if (!user) {
      throw new UnauthorizedException(USER_NOT_FOUND_ERROR);
    }

    const isPasswordValid = compare(password, user.passwordHash);

    if (!isPasswordValid) {
      throw new UnauthorizedException(WRONG_PASSWORD_ERROR);
    }

    return { email: user.email };
  }

   login(email: string) {
    const payload = { email };
    return {
      accessToken: this.jwtService.sign(payload)
    }
  }
}
