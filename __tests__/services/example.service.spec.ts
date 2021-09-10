import exampleService from '../../src/api/services/example.service'

describe('ExampleService', ():void => {
  describe('list function', ():void => {
    let examples: Array<unknown>

    beforeEach(async () => {
      examples = await exampleService.list()
    })

    it('should return an array', async ():Promise<void> => {
      expect(examples).toBeInstanceOf(Array)
    })

    it('should have items of type example', async (): Promise<void> => {
      expect(examples[0]).toMatchObject({ id: 1, text: 'lorem' })
    })
  })
})
