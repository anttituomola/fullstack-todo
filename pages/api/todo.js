import prisma from "/lib/prisma"

const todo = async (req, res) => {
    if (req.method === "POST") {
        const aTodo = await prisma.todos.create({
            data: {
                text: req.body.text,
                id: req.body.id,
                completed: req.body.completed,
                createdAt: req.body.created,
            }
        })
        res.status(201).json({ message: req.body})
    }

    if (req.method === "GET") {
        const todos = await prisma.todos.findMany()
        res.status(200).json(todos)
    }
}

export default todo