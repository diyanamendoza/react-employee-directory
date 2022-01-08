import { client, parseData } from './client';

export async function getProfile() {
  try {
     const request = await client.from('profiles').select().single();
      return parseData(request);
  } catch (e) {
      console.log(e)
      return {}
  }
}

export async function updateProfile({ name, email, bio, birthday }) {
  const request = await client
    .from('profiles')
    .update({ name, bio, birthday })
    .match({ email });
  return parseData(request);
}

export async function createProfile({ name, email, bio, birthday }) {
  try {
    const request = await client
    .from('profiles')
    .insert({ name, email, bio, birthday });
    return parseData(request);
    } catch (e) {
      console.log(e)
      return {}
    }
  }

  export async function deleteProfileById(id) {
    try {
      const request = await client.from('profiles').delete().match({ id });
      return parseData(request);
    } catch (e) {
      console.log(e)
      return {}
    }
  }
  