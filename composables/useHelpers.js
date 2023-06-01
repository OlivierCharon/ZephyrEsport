export const useHelpers = () => {

    const titleCase = (str) => {
        return str.charAt(0).toUpperCase()+str.slice(1).toLowerCase()
    }

    return {
        titleCase
    }
}