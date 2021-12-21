import {DataTypes, Model} from 'sequelize'

class Department extends Model {
   static setup(sequelize){
    Department.init({
           id:{
               type: DataTypes.INTEGER,
               field:'id_depart',
               allowNull:false,
               primaryKey:true,
               autoIncrement:true
            },
            nombre: {
                allowNull: false,
                type: DataTypes.STRING
              },
            longitud: {
                allowNull: true,
                type: DataTypes.REAL
              },
            latitud: {
                allowNull: true,
                type: DataTypes.REAL
              }
       },{sequelize,
          modelName:'departamentos',
          timestamps: false})
   }
}

export default Department