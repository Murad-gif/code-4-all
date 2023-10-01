package CS2001.Group47.ELearning_Platform.security;

import java.util.Date;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import static java.util.Collections.emptyList;

public class JWTService {

    static final long EXPIRATIONKEY = 864_000_00; //1 day in milliseconds
    static final String SIGNINKEY = "SecretKey";
    static final String PREFIX = "Bearer";

    // Add token to Authorization header
    static public void addToken(HttpServletResponse response, String email) {
        String JwtToken = Jwts.builder().setSubject(email)
            .setExpiration(new Date(System.currentTimeMillis() + EXPIRATIONKEY))
            .signWith(SignatureAlgorithm.HS512, SIGNINKEY)
            .compact();
        System.out.println(JwtToken);
        response.addHeader("Authorization", PREFIX + " " + JwtToken);
        response.addHeader("Access-Control-Expose-Headers", "Authorization");
    }

    // Get token from Authorization header
    static public Authentication getAuthentication(HttpServletRequest request) {
        String token = request.getHeader("Authorization");
        if(token != null) {
            try {
                String student = Jwts.parser()
                    .setSigningKey(SIGNINKEY)
                    .parseClaimsJws(token.replace(PREFIX, ""))
                    .getBody()
                    .getSubject();
                if(student != null) {
                    return new UsernamePasswordAuthenticationToken(student, null, emptyList());
                } 
            } 
                catch(Exception e) {
                    System.out.println(e.getMessage());
                }
        }
        return null;
    }
    
}
