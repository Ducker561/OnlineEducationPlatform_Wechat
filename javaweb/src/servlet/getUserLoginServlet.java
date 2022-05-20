package servlet;

import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.JSONObject;
import dao.loginDao;
import domain.User;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;
import java.util.ArrayList;

@WebServlet("/loginServlet")
public class getUserLoginServlet extends HttpServlet {

    loginDao logindao = new loginDao();

    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        doGet(request, response);
    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        response.setContentType("text/html;charset=utf-8");
        /* 设置响应头允许ajax跨域访问 */
        response.setHeader("Access-Control-Allow-Origin", "*");
        /* 星号表示所有的异域请求都可以接受， */
        response.setHeader("Access-Control-Allow-Methods", "GET,POST");

        //获取微信小程序get的参数值并打印
        String code = request.getParameter("code");

        String url = "https://api.weixin.qq.com/sns/jscode2session?appid=your_appid&secret=your_appsecret" +
                "&js_code="+code+"&grant_type=authorization_code";

        URL obj = new URL(url);
        HttpURLConnection con = (HttpURLConnection) obj.openConnection();

        //默认值我GET
        con.setRequestMethod("GET");

        final String USER_AGENT = "Mozilla/5.0";

        //添加请求头
        con.setRequestProperty("User-Agent", USER_AGENT);

        int responseCode = con.getResponseCode();
        System.out.println("\nSending 'GET' request to URL : " + url);
        System.out.println("Response Code : " + responseCode);

        BufferedReader in = new BufferedReader(
                new InputStreamReader(con.getInputStream()));
        String inputLine;
        StringBuffer responsePacket = new StringBuffer();

        while ((inputLine = in.readLine()) != null) {
            responsePacket.append(inputLine);
        }
        System.out.println(responsePacket);
        JSONObject jsonobject= JSONObject.parseObject(responsePacket.toString());
        ArrayList<User> user = new ArrayList<>();
        user = logindao.login(jsonobject.getString("openid"));
        String userstr = JSON.toJSONString(user);
        System.out.println(userstr);
        response.getWriter().print(userstr);
        response.addHeader("access-control-allow-origin", "*");
    }
}
