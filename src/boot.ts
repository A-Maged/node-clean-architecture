import { DBDriver } from '@DB';
import { InMemoryStoreDriver } from '@InMemoryStore';
import { DeviceRepo, UserRepo } from '@Repos';

/* databases */
const dbDriver = new DBDriver({});
const inMemoryStoreDriver = InMemoryStoreDriver();

/* repos */
const deviceRepo = new DeviceRepo(dbDriver, inMemoryStoreDriver);
const userRepo = new UserRepo(dbDriver, inMemoryStoreDriver);

export { deviceRepo, userRepo };
