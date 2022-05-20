package dao;

import Util.DBUtil;
import domain.User;

import java.sql.Connection;
import java.sql.ResultSet;
import java.util.ArrayList;

public class loginDao {

    public int register(String openid) {
        int ifsuccess = 0;
        try {
            //加载驱动
            String sql = "INSERT INTO user(openid,muchMoney,points) VALUES(?,?,?)";
            ifsuccess = DBUtil.update(sql, openid, 0, 0);
        } catch (Exception e) {
               e.printStackTrace();
        }
        return ifsuccess;
    }

    public ArrayList<User> login(String openid){
        ArrayList<User> users = new ArrayList<>();
        try {
            String sql = "SELECT * FROM user WHERE openid=?";
            Connection con = DBUtil.getCon();
            ResultSet rs = DBUtil.query(con, sql, openid);
            while (rs.next()) { //从头到尾逐行移动指针
                //每查询一行，封装为一个User对象
                User usr = new User();
                //封装数据:从表中转换为对象
                usr.setOpenid(rs.getString(1));
                usr.setMuchMoney(rs.getInt(2));
                usr.setPoints(rs.getInt(3));
                users.add(usr);
                if (!users.isEmpty())  return users;
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
        if(users.isEmpty()) {
            if(register(openid)==1){
                User usr = new User();
                usr.setOpenid(openid);
                usr.setMuchMoney(0);
                usr.setPoints(0);
                users.add(usr);
            }
            else assert false;
        }
        else assert false;

        return users;
    }
}
