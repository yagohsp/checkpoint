async function objectRemoveEmpty(object) { 
    var newObj = {};
    const promises = Object.entries(object).map(async ([entry, value]) => {
        if(value) newObj[entry] = value;
    });
    await Promise.all(promises);
    return newObj;
};

export { objectRemoveEmpty };