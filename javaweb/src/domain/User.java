package domain;

public class User {
    private String openid;
    private int muchMoney;
    private int points;

    public User(String openid, int muchMoney, int points) {
        this.openid=openid;
        this.muchMoney=muchMoney;
        this.points=points;
    }

    public User() {
    }

    public String getOpenid() {
        return openid;
    }

    public void setOpenid(String openid) {
        this.openid = openid;
    }

    public int getMuchMoney() {
        return muchMoney;
    }

    public void setMuchMoney(int muchMoney) {
        this.muchMoney = muchMoney;
    }

    public int getPoints() {
        return points;
    }

    public void setPoints(int points) {
        this.points = points;
    }
}
