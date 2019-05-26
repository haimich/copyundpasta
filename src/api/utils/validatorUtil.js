
export function validateId(body) {
    if (body == null || body.id == null) {
        throw new Error("Missing mandatory field 'id'");
    }

    const id = parseInt(body.id, 10);

    if (isNaN(id) || id < 0) {
        throw new Error("Invalid value for field 'id'");
    } else {
        return id;
    }
}