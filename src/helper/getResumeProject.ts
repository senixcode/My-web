interface IResumeProject {
  description: string
  status: boolean
}
export const getResumeProject = (
  description: string,
  limite: number = 130
): IResumeProject => {
  let result: IResumeProject = {
    description: description,
    status: false,
  }
  if (description.length > limite) {
    result.description = `${description.slice(0, limite)}...`
    result.status = true
  }
  return result
}
