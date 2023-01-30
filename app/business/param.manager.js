import paramDAO from '../DAO/paramDAO';

function create(context) {
    async function getLast() {
        let result = await paramDAO.getLast();
        
        return result;
        
     }
    async function get(id) {
        let result = await paramDAO.get(id);
        if (result) {
            return result;
        }
     }
    
    async function query() {
        let result = paramDAO.query();
        if (result) {
            return result;
        }
     }
    return {
        query : query,
        getLast : getLast,
        get : get,
        
    };
}


export default {
    create : create,
};
