import { container, IOC_TYPES } from '@Ioc';
import { IDeviceRepo, IUserRepo } from '@Repos';
import { IDevice } from '@Entities';
import { IHttpRequest } from '@Usecases/interfaces/HttpRequest';

// TODO: should the usecase know about the HTTP request ?
// it should only contain business logic
// and be agnostic of the caller/environment, so it can be called from cli or web or any client

/* query store for connected-devices that belongs to a user */
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

  return devices;
}
