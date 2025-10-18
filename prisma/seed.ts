import { PrismaClient, UserRole, ProjectStatus, TaskStatus } from '../lib/generated/prisma'
import bcrypt from 'bcryptjs'

const prisma = new PrismaClient()

async function main() {
  console.log('Start seeding...')

  // Clear existing data (optional - be careful with this in production!)
  await prisma.task.deleteMany()
  await prisma.document.deleteMany()
  await prisma.project.deleteMany()
  await prisma.user.deleteMany()

  // Hash password for users
  const hashedPassword = await bcrypt.hash('password123', 10)

  // Create Clients
  const client1 = await prisma.user.create({
    data: {
      fullName: 'John Doe',
      email: 'john@example.com',
      password: hashedPassword,
      role: UserRole.CLIENT,
    },
  })

  const client2 = await prisma.user.create({
    data: {
      fullName: 'Sarah Wilson',
      email: 'sarah@example.com',
      password: hashedPassword,
      role: UserRole.CLIENT,
    },
  })

  // Create Freelancers
  const freelancer1 = await prisma.user.create({
    data: {
      fullName: 'Alice Smith',
      email: 'alice@example.com',
      password: hashedPassword,
      role: UserRole.FREELANCER,
    },
  })

  const freelancer2 = await prisma.user.create({
    data: {
      fullName: 'Bob Johnson',
      email: 'bob@example.com',
      password: hashedPassword,
      role: UserRole.FREELANCER,
    },
  })

  console.log('Created users')

  // Create Projects with nested Documents and Tasks
  const project1 = await prisma.project.create({
    data: {
      title: 'E-commerce Website Development',
      description: 'Build a modern e-commerce platform with shopping cart and payment integration',
      due_date: new Date('2025-12-31'),
      budget: '$5000',
      status: ProjectStatus.IN_PROGRESS,
      freelancerId: freelancer1.id,
      clientId: client1.id,
      ProjectDocuments: {
        create: [
          {
            name: 'Requirements Document.pdf',
          },
          {
            name: 'Design Mockups.fig',
          },
          {
            name: 'API Specifications.yaml',
          },
        ],
      },
      ProjectTask: {
        create: [
          {
            name: 'Setup project repository',
            status: TaskStatus.COMPLETED,
            due_date: new Date('2025-11-01'),
          },
          {
            name: 'Design database schema',
            status: TaskStatus.COMPLETED,
            due_date: new Date('2025-11-05'),
          },
          {
            name: 'Implement authentication',
            status: TaskStatus.IN_PROGRESS,
            due_date: new Date('2025-11-15'),
          },
          {
            name: 'Build product catalog',
            status: TaskStatus.PENDING,
            due_date: new Date('2025-11-25'),
          },
        ],
      },
    },
  })

  const project2 = await prisma.project.create({
    data: {
      title: 'Mobile App UI/UX Design',
      description: 'Create a modern and intuitive UI/UX design for iOS and Android app',
      due_date: new Date('2025-11-30'),
      budget: '$3000',
      status: ProjectStatus.PENDING,
      freelancerId: freelancer2.id,
      clientId: client1.id,
      ProjectDocuments: {
        create: [
          {
            name: 'Brand Guidelines.pdf',
          },
          {
            name: 'User Research.docx',
          },
        ],
      },
      ProjectTask: {
        create: [
          {
            name: 'Conduct user research',
            status: TaskStatus.PENDING,
            due_date: new Date('2025-11-10'),
          },
          {
            name: 'Create wireframes',
            status: TaskStatus.PENDING,
            due_date: new Date('2025-11-15'),
          },
          {
            name: 'Design high-fidelity mockups',
            status: TaskStatus.PENDING,
            due_date: new Date('2025-11-25'),
          },
        ],
      },
    },
  })

  const project3 = await prisma.project.create({
    data: {
      title: 'SEO Optimization & Content Strategy',
      description: 'Improve website SEO ranking and create content marketing strategy',
      due_date: new Date('2025-10-25'),
      budget: '$2000',
      status: ProjectStatus.COMPLETED,
      freelancerId: freelancer1.id,
      clientId: client2.id,
      ProjectDocuments: {
        create: [
          {
            name: 'SEO Audit Report.pdf',
          },
          {
            name: 'Content Calendar.xlsx',
          },
          {
            name: 'Keyword Research.pdf',
          },
        ],
      },
      ProjectTask: {
        create: [
          {
            name: 'Complete SEO audit',
            status: TaskStatus.COMPLETED,
            due_date: new Date('2025-10-05'),
          },
          {
            name: 'Keyword research',
            status: TaskStatus.COMPLETED,
            due_date: new Date('2025-10-10'),
          },
          {
            name: 'Implement on-page SEO',
            status: TaskStatus.COMPLETED,
            due_date: new Date('2025-10-20'),
          },
        ],
      },
    },
  })

  const project4 = await prisma.project.create({
    data: {
      title: 'Logo Design & Brand Identity',
      description: 'Create a unique logo and complete brand identity package',
      due_date: new Date('2025-09-15'),
      budget: '$1500',
      status: ProjectStatus.CANCELLED,
      freelancerId: freelancer2.id,
      clientId: client2.id,
      ProjectDocuments: {
        create: [
          {
            name: 'Initial Concepts.pdf',
          },
        ],
      },
      ProjectTask: {
        create: [
          {
            name: 'Initial consultation',
            status: TaskStatus.COMPLETED,
            due_date: new Date('2025-09-01'),
          },
          {
            name: 'Create logo concepts',
            status: TaskStatus.COMPLETED,
            due_date: new Date('2025-09-05'),
          },
        ],
      },
    },
  })

  console.log('Created projects with documents and tasks')

  console.log('Seeding completed successfully!')
  console.log({
    users: 4,
    projects: 4,
    documents: 8,
    tasks: 12,
  })
}

main()
  .catch((e) => {
    console.error('Error during seeding:', e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })