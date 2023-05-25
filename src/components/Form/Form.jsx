import { useForm, FormProvider, useFormContext } from "react-hook-form";
import { motion, AnimatePresence } from "framer-motion";

const form = {
    questions: [
        {
            id: "nombre",
            label: "Nombre",
            type: "text",
            validations: {
                required: "El nombre es requerido",
                minLength: 4,
            },
        },
        {
            id: "fecha",
            label: "Fecha",
            type: "date",
            validations: {
                required: "La fecha es requerida",
            },
        },
    ],
};

export const Form = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        control,
    } = useForm();

    function onSubmit(data) {
        console.log(data);
    }

    return (
        <div className="grid gap-2 p-3">
            <FormProvider {...{ register, errors }}>
                <form className="grid gap-2" onSubmit={handleSubmit(onSubmit)}>
                    {form.questions.map((question) => (
                        <FormInput key={question.id} {...question} />
                    ))}
                </form>
            </FormProvider>
        </div>
    );
};

function FormInput({ id, label, type, validations }) {
    const { register, errors } = useFormContext();
    return (
        <div className="grid gap-1">
            <label htmlFor={id}>{label}</label>
            <input
                className="rounded-sm"
                type={type}
                id={id}
                {...register(id, validations)}
            />
            <ErrorMessage errors={errors[id]} />
        </div>
    );
}

function ErrorMessage({ errors }) {
    const animation = {
        hidden: { y: -10, opacity: 0 },
        visible: { y: 0, opacity: 1 },
        exit: { opacity: 0 },
    };
    return (
        <AnimatePresence initial={false} mode={"wait"}>
            {errors?.message && (
                <motion.p
                    variants={animation}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    className="text-red-400 font-bold"
                >
                    {errors?.message}
                </motion.p>
            )}
        </AnimatePresence>
    );
}
