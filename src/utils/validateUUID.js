import { validate as uuidValidate, version as uuidVersion } from 'uuid';

/**
 * @param {string} uuid
 * @returns boolean value indicating if `uuid` is valid uuidv4 instance or not
 */
const isValidUUIDv4 = (uuid) => uuidValidate(uuid) && uuidVersion(uuid) === 4;

export default isValidUUIDv4;
