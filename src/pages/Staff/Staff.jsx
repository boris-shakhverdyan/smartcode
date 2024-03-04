import trainer from "../../assets/images/trainer.webm";
import TrainerCard from "../../components/TrainerCard/TrainerCard";
import useAnimations from "../../utils/Animations/useAnimations";
import { motion } from "framer-motion";
const Staff = () => {
    const { opacityAnimationVariant } = useAnimations();
    const trainers = [
        {
            id: 1,
            name: "Էդգար",
            image: trainer,
            proffesion: {
                proffesion_name: "MERN-Stack",
                proffesion_image:
                    "https://smartcode.am/public/image/courses/front-end.svg",
            },
        },
        {
            id: 2,
            name: "Անդրանիկ",
            image: trainer,
            proffesion: {
                proffesion_name: "Full-Stack",
                proffesion_image:
                    "https://smartcode.am/public/image/courses/full-stack.svg",
            },
        },
        {
            id: 3,
            name: "Նարեկ",
            image: trainer,
            proffesion: {
                proffesion_name: "JavaScript",
                proffesion_image:
                    "https://smartcode.am/public/image/courses/javaScript.svg",
            },
        },
        {
            id: 4,
            name: "Էմիլ",
            image: trainer,
            proffesion: {
                proffesion_name: "Front-End",
                proffesion_image:
                    "https://smartcode.am/public/image/courses/front-end.svg",
            },
        },
        {
            id: 5,
            name: "Ալբերտ",
            image: trainer,
            proffesion: {
                proffesion_name: "Python / ML",
                proffesion_image:
                    "https://smartcode.am/public/image/courses/python-ml.svg",
            },
        },
        {
            id: 6,
            name: "Անուշավան",
            image: trainer,
            proffesion: {
                proffesion_name: "React.js",
                proffesion_image:
                    "https://smartcode.am/public/image/courses/react.svg",
            },
        },
        {
            id: 7,
            name: "Քրիստինե",
            image: trainer,
            proffesion: {
                proffesion_name: "JavaScript",
                proffesion_image:
                    "https://smartcode.am/public/image/courses/javaScript.svg",
            },
        },
        {
            id: 8,
            name: "Ալբերտ",
            image: trainer,
            proffesion: {
                proffesion_name: "Python / ML",
                proffesion_image:
                    "https://smartcode.am/public/image/courses/python-ml.svg",
            },
        },
        {
            id: 9,
            name: "Արման",
            image: trainer,
            proffesion: {
                proffesion_name: "JavaScript",
                proffesion_image:
                    "https://smartcode.am/public/image/courses/javaScript.svg",
            },
        },
        {
            id: 10,
            name: "Արման",
            image: trainer,
            proffesion: {
                proffesion_name: "Python / Django",
                proffesion_image:
                    "https://smartcode.am/public/image/courses/python-django.svg",
            },
        },
        {
            id: 11,
            name: "Հայկ",
            image: trainer,
            proffesion: {
                proffesion_name: "HTML / CSS",
                proffesion_image:
                    "https://smartcode.am/public/image/courses/python-django.svg",
            },
        },
        {
            id: 12,
            name: "Գոռ",
            image: trainer,
            proffesion: {
                proffesion_name: "Python / OOP",
                proffesion_image:
                    "https://smartcode.am/public/image/courses/python-django.svg",
            },
        },
        {
            id: 13,
            name: "Նարեկ",
            image: trainer,
            proffesion: {
                proffesion_name: "React.js",
                proffesion_image:
                    "https://smartcode.am/public/image/courses/react.svg",
            },
        },
        {
            id: 14,
            name: "Ռոման",
            image: trainer,
            proffesion: {
                proffesion_name: "React.js",
                proffesion_image:
                    "https://smartcode.am/public/image/courses/react.svg",
            },
        },
        {
            id: 15,
            name: "Արթուր",
            image: trainer,
            proffesion: {
                proffesion_name: "React.js",
                proffesion_image:
                    "https://smartcode.am/public/image/courses/react.svg",
            },
        },
        {
            id: 16,
            name: "Զմրուխտ",
            image: trainer,
            proffesion: {
                proffesion_name: "HTML / CSS",
                proffesion_image:
                    "https://smartcode.am/public/image/courses/python-django.svg",
            },
        },
        {
            id: 17,
            name: "Էրիկ",
            image: trainer,
            proffesion: {
                proffesion_name: "Java",
                proffesion_image:
                    "https://smartcode.am/public/image/courses/java.svg",
            },
        },
        {
            id: 18,
            name: "Արման",
            image: trainer,
            proffesion: {
                proffesion_name: "HTML / CSS",
                proffesion_image:
                    "https://smartcode.am/public/image/courses/python-django.svg",
            },
        },
        {
            id: 19,
            name: "Սերգեյ",
            image: trainer,
            proffesion: {
                proffesion_name: "Front-End",
                proffesion_image:
                    "https://smartcode.am/public/image/courses/front-end.svg",
            },
        },
        {
            id: 20,
            name: "Վահե",
            image: trainer,
            proffesion: {
                proffesion_name: "HTML / CSS",
                proffesion_image:
                    "https://smartcode.am/public/image/courses/python-django.svg",
            },
        },
        {
            id: 21,
            name: "Արտյոմ",
            image: trainer,
            proffesion: {
                proffesion_name: "HTML / CSS",
                proffesion_image:
                    "https://smartcode.am/public/image/courses/python-django.svg",
            },
        },
        {
            id: 22,
            name: "Աղասի",
            image: trainer,
            proffesion: {
                proffesion_name: "Java",
                proffesion_image:
                    "https://smartcode.am/public/image/courses/java.svg",
            },
        },
    ];

    return (
        <motion.div
            id="staff"
            className="mt-20 container mb-footer"
            initial="hidden"
            whileInView="visible"
            {...opacityAnimationVariant(1)}
            style={{
                display: "flex",
                flexWrap: "wrap",
                alignItems: "center",
                justifyContent: "center",
                gap: "1rem",
                paddingBottom: 20,
            }}
        >
            {trainers.map((trainer) => {
                return <TrainerCard key={trainer.id} {...trainer} />;
            })}
        </motion.div>
    );
};

export default Staff;
