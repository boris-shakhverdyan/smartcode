import { useTranslation as useTranslationI18Next } from "react-i18next";

const useTranslation = (namespaces) => {
    const { t } = useTranslationI18Next(namespaces);

    return (
        key,
        namespace = Array.isArray(namespaces) ? namespaces[0] : namespaces
    ) => t(key, { ns: namespace });
};

export default useTranslation;
