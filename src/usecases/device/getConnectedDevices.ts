import { container } from 'src/ioc';
import { IOC_TYPES } from 'src/ioc-types';
import { IDeviceRepo, IUserRepo } from '@Repos';
import { IDevice } from '@Entities';
import { IHttpRequest } from '@Usecases/interfaces/HttpRequest';

// query store for connected-devices that belongs to a user

export default async function execute(
  request: IHttpRequest
): Promise<IDevice[] | []> {
  const deviceRepo = container.get<IDeviceRepo>(IOC_TYPES.DeviceRepo);
  const userRepo = container.get<IUserRepo>(IOC_TYPES.UserRepo);

  let currentUser = userRepo.getCurrentUser(request);

  if (!currentUser) {
    throw new Error('User not logged in');
  }

  let devices = await deviceRepo.getConnectedDevices(currentUser.id);

  return Promise.resolve(devices);
}
