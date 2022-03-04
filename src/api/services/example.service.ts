import { Example } from '@api/types/example.types'

const exampleData = [
  { id: 1, text: 'lorem' },
  { id: 2, text: 'ipsum' },
  { id: 3, text: 'dolor' },
  { id: 4, text: 'sit' },
  { id: 5, text: 'amet' },
]

class ExampleService {

  async list(): Promise<Example[]> {
    return exampleData
  }

  async create(example: Omit<Example, 'id'>): Promise<Example> {
    const newId = exampleData.reduce((acc, current) => current.id > acc ? current.id : acc, 0) + 1

    const newExample = {
      id: newId,
      ...example
    }

    exampleData.push(newExample)
    return newExample
  }

  async get(id: number) {
    return exampleData.find(example => example.id === id)
  }

  async update(id: number, example: Omit<Example, 'id'>): Promise<Example> {
    const index = exampleData.findIndex(example => example.id === id)
    const newExample = { ...example, id }
    exampleData.splice(index, 1, newExample)
    return newExample
  }

  async partialUpdate(id: number, example: Omit<Example, 'id'>): Promise<Example> {
    const index = exampleData.findIndex(example => example.id === id)
    const newExample = { ...exampleData[index], ...example, id }
    exampleData.splice(index, 1, newExample)
    return newExample
  }

  async delete(id: number): Promise<Example> {
    const index = exampleData.findIndex(example => example.id === id)
    const [example] = exampleData.splice(index, 1)
    return example
  }

}

const service = new ExampleService()

export default service
