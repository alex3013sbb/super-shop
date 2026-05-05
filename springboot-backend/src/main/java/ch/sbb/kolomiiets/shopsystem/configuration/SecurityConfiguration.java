package ch.sbb.kolomiiets.shopsystem.configuration;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.provisioning.InMemoryUserDetailsManager;
import org.springframework.security.web.SecurityFilterChain;

import static org.springframework.security.config.Customizer.withDefaults;

@Configuration
@EnableWebSecurity
public class SecurityConfiguration {

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception{
        http.authorizeHttpRequests(request ->
                request.requestMatchers(HttpMethod.GET, "/alexshop/orders/bycustomer/*").hasRole("CUSTOMER")
                        .requestMatchers(HttpMethod.POST, "/alexshop/orders").hasRole("CUSTOMER")
                        .requestMatchers(HttpMethod.DELETE, "/alexshop/orders/id/*").hasAnyRole("CUSTOMER", "ADMIN")
                        .requestMatchers(HttpMethod.PUT, "/alexshop/orders").hasAnyRole("CUSTOMER", "ADMIN")
                        .requestMatchers(HttpMethod.POST, "/alexshop/products").hasRole("ADMIN")
                        .requestMatchers(HttpMethod.PUT, "/alexshop/products").hasRole("ADMIN")
                        .requestMatchers(HttpMethod.DELETE, "/alexshop/products/id/*").hasRole("ADMIN")
                        .requestMatchers(HttpMethod.DELETE, "/alexshop/customers/id/*").hasRole("ADMIN")
                        .anyRequest().authenticated()
        )
                .csrf(AbstractHttpConfigurer::disable)
                .httpBasic(withDefaults());

        return http.build();
    }

    @Bean
    public UserDetailsService userDetailsService(){
        InMemoryUserDetailsManager users = new InMemoryUserDetailsManager();

        UserDetails customer = User.withUsername("alex")
                .password(bCryptPasswordEncoder().encode("password"))
                .roles("CUSTOMER")
                .build();

        UserDetails customer1 = User.withUsername("roman")
                .password(bCryptPasswordEncoder().encode("password"))
                .roles("CUSTOMER")
                .build();

        UserDetails admin = User.withUsername("admin")
                .password(bCryptPasswordEncoder().encode("password"))
                .roles("ADMIN")
                .build();

        users.createUser(customer);
        users.createUser(customer1);
        users.createUser(admin);

        return users;
    }

    @Bean
    public PasswordEncoder bCryptPasswordEncoder(){
        return new BCryptPasswordEncoder();
    }
}