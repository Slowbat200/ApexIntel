import { auth } from '@clerk/nextjs';
import prismadb from './prismadb';
import { MAX_FREE_COUNTS } from '@/constants/constants';

export const increaseApiLimit = async () => {
  const { userId } = auth();

  if (!userId) return;

  /* The code `const userApiLimit = await prismadb.userApiLimit.findUnique({ where: { userId } })` is
querying the database to find a unique record in the `userApiLimit` table based on the `userId`
provided. */
  const userApiLimit = await prismadb.userApiLimit.findUnique({
    where: {
      userId,
    },
  });

  /* The `if (userApiLimit)` block is checking if there is an existing `userApiLimit` record for the
 current `userId`. If there is, it updates the `count` field of that record by incrementing it by 1.
 This is done using the `prismadb.userApiLimit.update()` method, which takes the `userId` as the
 `where` condition and the updated `count` value as the `data` parameter. */
  if (userApiLimit) {
    await prismadb.userApiLimit.update({
      where: { userId: userId },
      data: { count: userApiLimit.count + 1 },
    });

    /* The `} else { ... }` block is executed when there is no existing `userApiLimit` record for the
  current `userId`. */
  } else {
    await prismadb.userApiLimit.create({
      data: {
        userId: userId,
        count: 1,
      },
    });
  }
};

export const checkApiLimit = async () => {
  const { userId } = auth();

  if (!userId) return false;

  /* The code `const userApiLimit = await prismadb.userApiLimit.findUnique({ where: { userId } })` is
  querying the database to find a unique record in the `userApiLimit` table based on the `userId`
  provided. It is using the `findUnique()` method of the `userApiLimit` model in the `prismadb`
  database. The `where` parameter specifies the condition for the query, which in this case is
  finding a record where the `userId` column matches the `userId` variable. The result of the query
  is stored in the `userApiLimit` variable. */
  const userApiLimit = await prismadb.userApiLimit.findUnique({
    where: {
      userId: userId,
    },
  });

  if (!userApiLimit || userApiLimit.count < MAX_FREE_COUNTS) {
    return true;
  } else {
    return false;
  }
};

export const getApiLimitCount = async () => {
  const { userId } = auth();

  if (!userId) return 0;

  const userApiLimit = await prismadb.userApiLimit.findUnique({
    where: {
      userId,
    },
  });

  if (!userApiLimit) {
    return 0;
  }

  return userApiLimit.count;
};
