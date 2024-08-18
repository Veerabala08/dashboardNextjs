import { User } from './models';
import { connectTODB } from './utils';

export const FetchUser = async () => {
  try {
    await connectTODB(); // Ensure database connection
    const users = await User.find(); // Fetch users from database
    return users;
  } catch (error) {
    console.error('Error fetching users:', error);
    throw new Error('Failed to fetch users');
  }
};
