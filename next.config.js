const {PHASE_DEVELOPMENT_SERVER} = require('next/constants')

module.exports = (phase)=>{
    if(phase === PHASE_DEVELOPMENT_SERVER) return {
        env:{
            mongodb_user: 'jaiusoni2003',
            mongodb_pass: 'admin',
            mongodb_cluster: 'cluster1',
            dbName: 'blog',

        }
    }
    return {
        env:{
            mongodb_user: 'jaiusoni2003',
            mongodb_pass: 'admin',
            mongodb_cluster: 'cluster1',
            dbName: 'blog-production',

        }
    }
}