const useCard = (descriprion, title) => {
    const descriprions = descriprion?.substring(0, 100)+ '...';
    const titles = title?.substring(0, 31)+ '...';

    return {descriprions, titles}
}

export {useCard}