import styles from "./ProjectList.module.scss";

interface Props{
  onClose: () => void;
}
const ProjectList = ({onClose}: Props) => {
  return (
    <div onClick={onClose}>ProjectList</div>
  )
}

export default ProjectList