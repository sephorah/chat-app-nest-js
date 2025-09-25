import { Test, TestingModule } from '@nestjs/testing';
import { UsersService } from '../users.service';
import { CreateUserDto } from '../dto/create-user.dto';
import { mockPrismaService } from '../mocks/users.service.mock';
import { User } from '@prisma/client';
import { PrismaService } from '../../prisma/prisma.service';
import { UpdateUserDto } from '../dto/update-user.dto';

describe('UsersService', () => {
  let service: UsersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UsersService,
        { provide: PrismaService, useValue: mockPrismaService },
      ],
    }).compile();

    service = module.get<UsersService>(UsersService);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  const mockUsers: User[] = [
    {
      id: '1',
      email: 'link@nintendo.fr',
      username: 'link',
      password: 'hashedPassword',
      createdAt: new Date(),
    },
    {
      id: '2',
      email: 'zelda@nintendo.fr',
      username: 'zelda',
      password: 'hashedPassword',
      createdAt: new Date(),
    },
    {
      id: '3',
      email: 'peach@nintendo.fr',
      username: 'peach',
      password: 'hashedPassword',
      createdAt: new Date(),
    },
    {
      id: '4',
      email: 'mario@nintendo.fr',
      username: 'mario',
      password: 'hashedPassword',
      createdAt: new Date(),
    },
  ];

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('create', () => {
    it('should create a new user', async () => {
      const createUserDto: CreateUserDto = {
        email: 'zelda@nintendo.fr',
        username: 'zelda',
        password: 'l1nkToThePast',
      };
      const mockUser: User = {
        id: '1',
        email: 'zelda@nintendo.fr',
        username: 'zelda',
        password: 'hashedPassword',
        createdAt: new Date(),
      };

      jest
        .spyOn(mockPrismaService.user, 'create')
        .mockResolvedValueOnce(mockUser);

      const newUser = await service.create(createUserDto);

      expect(newUser.email).toStrictEqual(createUserDto.email);
      expect(newUser.username).toStrictEqual(createUserDto.username);
      expect(newUser).toHaveProperty('id');
      expect(newUser).toHaveProperty('createdAt');
      expect(newUser).toHaveProperty('password');
    });

    it('should throw an error when creating a user with taken username', async () => {
      jest
        .spyOn(mockPrismaService.user, 'create')
        .mockRejectedValueOnce(new Error('Username already taken'));

      const createUserDto: CreateUserDto = {
        email: 'zelda@nintendo.fr',
        username: 'zelda',
        password: 'l1nkToThePast',
      };

      await expect(service.create(createUserDto)).rejects.toThrow(
        'Username already taken',
      );
    });
  });

  describe('findAll', () => {
    it('should get all users', async () => {
      jest
        .spyOn(mockPrismaService.user, 'findMany')
        .mockResolvedValueOnce(mockUsers);

      const allUsers = await service.findAll();
      expect(allUsers).toStrictEqual(mockUsers);
    });

    it('should return an empty array when no users exist', async () => {
      jest.spyOn(mockPrismaService.user, 'findMany').mockResolvedValueOnce([]);

      const allUsers = await service.findAll();

      expect(allUsers).toEqual([]);
    });
  });

  describe('findOne', () => {
    it('should find one user by id', async () => {
      jest
        .spyOn(mockPrismaService.user, 'findUnique')
        .mockResolvedValueOnce(mockUsers[1]);
      const foundUser = await service.findOne('2');

      expect(foundUser).toStrictEqual(mockUsers[1]);
    });

    it("shouldn't find non-existing user by id", async () => {
      jest
        .spyOn(mockPrismaService.user, 'findUnique')
        .mockResolvedValueOnce(undefined);
      const nonExistentUser = await service.findOne('10');

      expect(nonExistentUser).toStrictEqual(undefined);
    });
  });

  describe('update', () => {
    it('should update an existing user', async () => {
      const updateUserDto: UpdateUserDto = {
        username: 'zeldaHyrule',
        email: 'zelda@hyrule.fr',
      };
      const mockUpdatedUser: User = {
        id: '1',
        email: 'zelda@hyrule.fr',
        username: 'zeldaHyrule',
        password: 'hashedPassword',
        createdAt: new Date(),
      };

      jest
        .spyOn(mockPrismaService.user, 'update')
        .mockResolvedValueOnce(mockUpdatedUser);

      const updatedUser = await service.update('1', updateUserDto);

      expect(updatedUser).toHaveProperty('id');
      expect(updatedUser.email).toStrictEqual(updateUserDto.email);
      expect(updatedUser.username).toStrictEqual(updateUserDto.username);
      expect(updatedUser).toHaveProperty('createdAt');
      expect(updatedUser).toHaveProperty('password');
      expect(mockPrismaService.user.update).toHaveBeenCalledWith({
        where: { id: '1' },
        data: updateUserDto,
      });
    });

    it("shouldn't update a non-existing user", async () => {
      const updateUserDto: UpdateUserDto = {
        username: 'princessPeach',
      };
      jest
        .spyOn(mockPrismaService.user, 'update')
        .mockRejectedValueOnce(new Error('User not found'));

      await expect(service.update('10', updateUserDto)).rejects.toThrow(
        'User not found',
      );
    });
  });

  describe('remove', () => {
    it('should remove an existing user', async () => {
      const mockUser: User = {
        id: '1',
        email: 'zelda@nintendo.fr',
        username: 'zelda',
        password: 'hashedPassword',
        createdAt: new Date(),
      };
      jest
        .spyOn(mockPrismaService.user, 'delete')
        .mockResolvedValueOnce(mockUser);

      const removedUser = await service.remove('1');

      expect(removedUser).toHaveProperty('id');
      expect(removedUser).toHaveProperty('email');
      expect(removedUser).toHaveProperty('username');
      expect(removedUser).toHaveProperty('createdAt');
      expect(removedUser).toHaveProperty('password');
    });

    it("shouldn't remove a non-existing user", async () => {
      jest
        .spyOn(mockPrismaService.user, 'delete')
        .mockRejectedValueOnce(new Error('User not found'));

      await expect(service.remove('10')).rejects.toThrow('User not found');
    });
  });
});
