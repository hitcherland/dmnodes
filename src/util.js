function CreateElement(tag, options={}) {
    const {
        attributes = {},
        content,
        parent,
    } = options;

    const element = document.createElement(tag);
    Object.entries(attributes).forEach(function(entry) {
        const [key, value] = entry;
        element.setAttribute(key, value);
    });

    if(content !== undefined) {
        element.innerHTML = content;
    }

    if(parent !== undefined) {
        parent.appendChild(element);
    }
    
    return element;
}

function PromiseElement(tag, options={}) {
    return new Promise(function(resolve ,reject) {
        try {
            const element = CreateElement(tag, options);
            resolve(element);
        } catch(err) {
            reject(err)
        }
    });
}

const Util = {
    CreateElement,
    PromiseElement,
};

export default Util;

export {
    CreateElement,
    PromiseElement,
};