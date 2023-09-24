import { zodResolver } from "@hookform/resolvers/zod";
import InputGroup from "components/InputGroup";
import SelectGroup from "components/SelectGroup";
import { selectOptions } from "mocks";
import { Controller, FieldValues, useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { tasksActions } from "store/action-creators/tasks";
import { Priority, Status } from "types";
import { z } from "zod";
import "./style.scss";

const newProjectSchema = z.object({
  title: z.string().trim().min(5),
  description: z.string().trim().min(10),
  taskNumber: z.number().min(1, {
    message: "Number must be greater than or equal to 1",
  }),
  priority: z.custom<Priority>(),
});

export default function AddForm({
  toggleModal,
  status,
}: {
  toggleModal: () => void;
  status: Status;
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

  const { id } = useParams();

  const handleNewTask = (values: FieldValues) => {
    const { title, description, taskNumber, priority } = values;

    tasksActions.add({
      title,
      projectId: id!,
      description,
      taskNumber,
      priority: priority.value,
      status,
    });

    reset();
    toggleModal();
  };

  return (
    <form onSubmit={handleSubmit(handleNewTask)} className="task-form">
      <h2 className="task-form__title">New task</h2>
      <div className="task-form__wrapper">
        <InputGroup
          id="title"
          label="Title"
          type="text"
          errors={errors}
          placeholder="Deploy on Vercel"
          {...register("title", { required: true })}
        />
        <InputGroup
          id="description"
          label="Description"
          type="text"
          errors={errors}
          placeholder="It's obvious..."
          {...register("description", { required: true })}
        />
        <InputGroup
          id="taskNumber"
          label="Task number"
          type="number"
          errors={errors}
          placeholder="124"
          {...register("taskNumber", { required: true, valueAsNumber: true })}
        />

        <Controller
          control={control}
          name="priority"
          defaultValue={selectOptions[0]}
          render={({ field: { onChange, value } }) => (
            <SelectGroup
              id="priority"
              label="Priority"
              errors={errors}
              onChange={onChange}
              options={selectOptions}
              defaultValue={selectOptions[0]}
              value={selectOptions.find((option) => option.value === value)}
            />
          )}
          rules={{ required: true }}
        />
      </div>

      <button type="submit" className="task-form__submit">
        Create
      </button>
    </form>
  );
}
