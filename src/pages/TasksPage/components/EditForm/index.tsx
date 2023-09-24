import { zodResolver } from "@hookform/resolvers/zod";
import InputGroup from "components/InputGroup";
import SelectGroup from "components/SelectGroup";
import { selectOptions } from "mocks";
import { Controller, FieldValues, useForm } from "react-hook-form";
import { tasksActions } from "store/action-creators/tasks";
import { useAppSelector } from "store/hooks";
import { Priority } from "types";
import { z } from "zod";

const newProjectSchema = z.object({
  title: z.string().trim().min(5),
  description: z.string().trim().min(10),
  priority: z.custom<Priority>(),
});

export default function EditForm({
  toggleModal,
  taskId,
}: {
  toggleModal: () => void;
  taskId: string;
}) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    control,
  } = useForm({
    resolver: zodResolver(newProjectSchema),
  });

  const task = useAppSelector((state) =>
    state.tasks.tasks.find((task) => task.id === taskId)
  );

  const handleNewTask = (values: FieldValues) => {
    const { title, description, priority } = values;

    tasksActions.edit({
      id: taskId,
      title,
      description,
      priority: priority.value,
    });

    reset();
    toggleModal();
  };

  return (
    <form onSubmit={handleSubmit(handleNewTask)} className="task-form">
      <h2 className="task-form__title">Edit task</h2>
      <div className="task-form__wrapper">
        <InputGroup
          id="title"
          label="Title"
          type="text"
          errors={errors}
          placeholder="Deploy on Vercel"
          defaultValue={task?.title}
          {...register("title", { required: true })}
        />
        <InputGroup
          id="description"
          label="Description"
          type="text"
          errors={errors}
          placeholder="It's obvious..."
          defaultValue={task?.description}
          {...register("description", { required: true })}
        />
        <Controller
          control={control}
          name="priority"
          defaultValue={selectOptions.find(
            (option) => option.value === task?.priority
          )}
          render={({ field: { onChange, value } }) => (
            <SelectGroup
              id="priority"
              label="Priority"
              errors={errors}
              onChange={onChange}
              options={selectOptions}
              defaultValue={selectOptions.find(
                (option) => option.value === task?.priority
              )}
              value={selectOptions.find((option) => option.value === value)}
            />
          )}
          rules={{ required: true }}
        />
      </div>

      <button type="submit" className="task-form__submit">
        Edit
      </button>
    </form>
  );
}
