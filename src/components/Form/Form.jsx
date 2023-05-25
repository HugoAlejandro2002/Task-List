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

export const Form = ({ setCloseForm }) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        control,
    } = useForm();

    function onSubmit(data) {
        setCloseForm(false);
        console.log(data);
    }

    return (
        <div className="grid gap-2 p-3">
            <FormProvider {...{ register, errors }}>
                <form className="grid gap-2" onSubmit={handleSubmit(onSubmit)}>
                    {form.questions.map((question) => (
                        <FormInput key={question.id} {...question} />
                    ))}
                    <button
                        type="submit"
                        className="p-1 border-1 mt-2 text-white border-gray-400 bg-slate-500 rounded-md "
                    >
                        Crear
                    </button>
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
                className=" border-gray-400 border-2 p-2 rounded-md"
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
                    className="text-red-400 font-bold text-xs"
                >
                    {errors?.message}
                </motion.p>
            )}
        </AnimatePresence>
    );
}
