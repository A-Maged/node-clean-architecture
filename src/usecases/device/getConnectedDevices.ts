import { container } from '@Ioc';
import { IOC_TYPES } from '@IocTypes';
import { IDeviceRepo } from '@Repos';
import { IDevice } from '@Entities/Device';
import { IHttpRequest } from 'src/HttpRequest';

// query store for connected-devices that belongs to a user

export default async function execute(
  request: IHttpRequest
): Promise<IDevice[]> {
  const deviceRepo = container.get<IDeviceRepo>(IOC_TYPES.DeviceRepo);

  let currentUser = getCurrentUser();

  if (!currentUser) {
    throw new Error('User not logged in');
  }

  let devices = await deviceRepo.getConnectedDevices(currentUser.id);

  return Promise.resolve(devices);
}

/* TODO: replace stup */
function getCurrentUser() {
  return { id: 'regthn' };
}
