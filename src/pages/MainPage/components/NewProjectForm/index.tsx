import { zodResolver } from "@hookform/resolvers/zod";
import InputGroup from "components/InputGroup";
import { FieldValues, useForm } from "react-hook-form";
import { projectsActions } from "store/action-creators/projects";
import { z } from "zod";
import "./style.scss";

const newProjectSchema = z.object({
  title: z.string().min(5),
  description: z.string().min(10),
});

export default function NewProjectForm({
  toggleModal,
}: {
  toggleModal: () => void;
}) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(newProjectSchema),
  });

  const handleNewProject = (values: FieldValues) => {
    const { title, description } = values;

    projectsActions.add({ title, description });

    reset();
    toggleModal();
  };

  return (
    <form
      onSubmit={handleSubmit(handleNewProject)}
      className="new-project-form"
    >
      <h2 className="new-project-form__title">New project</h2>
      <InputGroup
        {...register("title", { required: true })}
        id="title"
        label="Title"
        placeholder="Great SaaS"
        type="text"
        errors={errors}
      />
      <InputGroup
        {...register("description", { required: true })}
        id="description"
        label="Description"
        placeholder="Writing some code"
        type="text"
        errors={errors}
      />
      <button type="submit" className="new-project-form__submit">
        Create
      </button>
    </form>
  );
}
