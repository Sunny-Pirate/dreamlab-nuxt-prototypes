import {PrismaClient} from '@prisma/client'

const prisma = new PrismaClient()

async function main() {


    const fasionBrandMockTrussardi = await prisma.fashion_brands.upsert({
        where: {
            id: "baec3840-c870-49c3-8319-e03532106826"
        },
        update: {},
        create: {
            id: "baec3840-c870-49c3-8319-e03532106826",
            name: "Trussardi",
            logo_url: "/storage/v1/object/sign/fashion/trussardi-logo.png"
        }
    })
    const fasionBrandMockVionnet = await prisma.fashion_brands.upsert({
        where: {
            id: "e07006a8-6d41-4347-a554-dc3c1b05e25e"
        },
        update: {},
        create: {
            id: "e07006a8-6d41-4347-a554-dc3c1b05e25e",
            name: "Vionnet",
            logo_url: "/storage/v1/object/sign/fashion/vionnet-logo.png"
        }
    })
    const fasionBrandMockGucci = await prisma.fashion_brands.upsert({
        where: {
            id: "6844c9d0-1d72-4864-b813-a5a247d0933c"
        },
        update: {},
        create: {
            id: "6844c9d0-1d72-4864-b813-a5a247d0933c",
            name: "Gucci",
            logo_url: "/storage/v1/object/sign/fashion/gucci-logo.png"
        }
    })
    const fasionBrandMockVogue = await prisma.fashion_brands.upsert({
        where: {
            id: "b633a3d7-0bb2-43ee-bb22-97dd0d7c3864"
        },
        update: {},
        create: {
            id: "b633a3d7-0bb2-43ee-bb22-97dd0d7c3864",
            name: "Vogue",
            logo_url: "/storage/v1/object/sign/fashion/vogue-logo.png"
        }
    })

    await prisma.fashion_anatomic_sheets.upsert({
        where: {
            id: "b15d5287-e4c8-43fe-8fe0-98c1a18fc970"
        },
        update: {},
        create: {
            id: "b15d5287-e4c8-43fe-8fe0-98c1a18fc970",
            gender: "Male",
            fashion_projects: [
                
            ]
        }
    })


    /*
    const alice = await prisma.user.upsert({
        where: { email: 'alice@prisma.io' },
        update: {},
        create: {
            email: 'alice@prisma.io',
            name: 'Alice',
            posts: {
                create: {
                    title: 'Check out Prisma with Next.js',
                    content: 'https://www.prisma.io/nextjs',
                    published: true,
                },
            },
        },
    })
    const bob = await prisma.user.upsert({
        where: { email: 'bob@prisma.io' },
        update: {},
        create: {
            email: 'bob@prisma.io',
            name: 'Bob',
            posts: {
                create: [
                    {
                        title: 'Follow Prisma on Twitter',
                        content: 'https://twitter.com/prisma',
                        published: true,
                    },
                    {
                        title: 'Follow Nexus on Twitter',
                        content: 'https://twitter.com/nexusgql',
                        published: true,
                    },
                ],
            },
        },
    })*/
    // console.log({ alice, bob })
}

main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })
