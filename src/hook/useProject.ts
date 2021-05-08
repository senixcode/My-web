import { useQuery } from "@apollo/client"
import { useRouter } from "next/router"
import { TypeSwitchLoading } from "../components/molecules/loadings/SwitchLoading"
import { GET_PROJECT } from "../graphql/querys/project"
import { IProjects } from "../interface/Project"

export const useProject = () => {
  const { locale } = useRouter()
  const LANGUAGE = (locale as string).toLocaleUpperCase()
  const getProject = useQuery(GET_PROJECT, {
    variables: { param: LANGUAGE },
  })

  const projects: Array<IProjects> = getProject.data && getProject.data.data
  const getProjectLoading = {
    ...getProject,
    ...{ typeLoading: TypeSwitchLoading.CARD },
  }

  return { getProjectLoading, projects }
}
