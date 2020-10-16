const mssql = require("../dbConnect.js");
const pool = mssql.pool;
mssql.poolConnection;

module.exports = {
    checkSdt: async (sdt, callBack)=>{
        await pool.request()
        .input('SoDienThoai', mssql.sql.VarChar, sdt)
        .query('select * from NguoiDung where SoDienThoai = @SoDienThoai',
            (error, results, fields)=>{
                if(error){
                    callBack(error);
                }
                return callBack(null, results);
            }
        );
    },
    create: async (data, callBack) => {
        await pool.request()
            .input('HoTen', mssql.sql.NVarChar, data.HoTen)
            .input('SoDienThoai', mssql.sql.VarChar, data.SoDienThoai)
            .input('Password', mssql.sql.VarChar, data.Password)
            .query('INSERT INTO NguoiDung(HoTen, SoDienThoai, Password) VALUES (@HoTen, @SoDienThoai, @Password)',
                (error, results, fields) => {
                    if (error) {
                        callBack(error);
                    }
                    return callBack(null, results);
                }
            );
    },

    updateUser: async (data, callBack) => {
        await pool.request()
            .input('MaNguoiDung', mssql.sql.NVarChar, data.MaNguoiDung)
            .input('HoTen', mssql.sql.NVarChar, data.HoTen)
            .input('NgaySinh', mssql.sql.DateTime, data.NgaySinh)
            .input('GioiTinh', mssql.sql.Bit, data.GioiTinh)
            .input('Password', mssql.sql.VarChar, data.Password)
            .query('UPDATE NguoiDung set HoTen = @HoTen, NgaySinh = @NgaySinh, GioiTinh = @GioiTinh, Password = @Password WHERE MaNguoiDung = @MaNguoiDung',
                (error, results, fields) => {
                    if (error) {
                        callBack(error);
                    }
                    return callBack(null, results);
                }
            );
      },

    getUserBySdt: async (sdt, callBack) => {
        var value = sdt;
        await pool.request()
            .input('value', mssql.sql.VarChar, value)
            .query("select * from NguoiDung where SoDienThoai = @value",
                (error, results, fields) => {
                    if (error) {
                        callBack(error);
                    }
                    return callBack(null, results.recordset[0]);
                }
            );
    },

    getUserById: async (id, callBack) => {
        var value = id;
        await pool.request()
            .input('value', mssql.sql.VarChar, value)
            .query("select * from NguoiDung where MaNguoiDung = @value",
                (error, results, fields) => {
                    if (error) {
                        callBack(error);
                    }
                    return callBack(null, results.recordset[0]);
                }
            );
    }
};