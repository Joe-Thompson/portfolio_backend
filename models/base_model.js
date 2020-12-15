const db = require('../database/config');

class base_model {
    constructor(table) {
        this.table = table;
    };

    get_all() {
        return db(this.table);
    };

    async insert(data) {
        try {
         let [id] = await db(this.table).insert(data);
         console.log(id)
         return await this.find_by({id})
        } catch (e) {
            return e;
        }
    };

    async find_by(data) {
        try {
            return await db(this.table).select('*').where(data).first();
        } catch (e) {
            return e
        }
    };

    async update(id, data) {
        try {
            await db(this.table).update(data).where({id: id});
        } catch (e) {
            return e
        }
    };
}

class message_model extends base_model {
    constructor(table) {
        super(table);
    };
}

const Message = new message_model('messages');

module.exports = {
    Message
}