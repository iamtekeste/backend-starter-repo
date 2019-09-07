import { success } from '../libs/response-lib';
export async function main(event, context) {
  const { yourEnvKey } = process.env;
  return success({ status: `yay! found a key! ${yourEnvKey}` });
}
