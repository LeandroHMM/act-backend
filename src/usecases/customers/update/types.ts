import { User } from "@entities/Users/types";
import { IMailSender } from "@helpers/MailSender/types";
import { UserRepository } from "@repositories/User/types";

export interface UpdateCustomerConstructor {
  new (dependencies: Dependencies): UpdateCustomerUseCase;
}
type Dependencies = {
  repository: UserRepository;
  mailSender: IMailSender;
};
export interface UpdateCustomerUseCase {
  handle(userDTO: CustomerUpdateDTO): Promise<Customer>;
}

type CustomerUpdateDTO = {
  name: string;
};

type Customer = {
  name: CustomerUpdateDTO["name"];
  email: User["email"];
  id: User["id"];
};
