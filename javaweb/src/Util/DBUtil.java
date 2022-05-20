package Util;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;

/**
 * 数据库工具类
 */
public class DBUtil {
    //加载驱动
    static {
        try{
            Class.forName("com.mysql.jdbc.Driver");
        }catch (Exception e){
            e.printStackTrace();
        }
    }

    /**
     * 获得连接
     * @return
     * @throws Exception
     */
    public static Connection getCon() throws Exception{
        String url="jdbc:mysql://localhost:3306/database_project?useUnicode=true&amp;characterEncoding=UTF-8";

        Connection con= DriverManager.getConnection(url,"root","root");
        return con;
    }

    /**
     * 执行增删改
     * @param sql
     * @param args
     * @throws Exception
     */
    public static int update(String sql,Object... args) throws Exception{
        Connection con=getCon();
        PreparedStatement pst=con.prepareStatement(sql);
        for(int i=0;i<args.length;i++){
            pst.setObject(i+1,args[i]);
        }
        int r=pst.executeUpdate();
        con.close();
        return r;
    }

    /**
     * 执行查询
     * @param sql
     * @param args
     * @return
     * @throws Exception
     */
    public static ResultSet query(Connection con,String sql, Object... args) throws Exception{

        PreparedStatement pst=con.prepareStatement(sql);
        for(int i=0;i<args.length;i++){
            pst.setObject(i+1,args[i]);
        }
        ResultSet rs=pst.executeQuery();
//        con.close();
        return rs;
    }
}