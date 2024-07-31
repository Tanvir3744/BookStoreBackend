const pick =<T extends object, k extends keyof T> (obj:T, keys:k[]) => {
    const finalObject = {};
    for (const key of keys) {
        if(obj && Object.hasOwnproperty.call())
    }
};

export default pick;
