package ch.sbb.kolomiiets.shopsystem;

import io.swagger.v3.oas.annotations.OpenAPIDefinition;
import io.swagger.v3.oas.annotations.enums.SecuritySchemeType;
import io.swagger.v3.oas.annotations.security.SecurityRequirement;
import io.swagger.v3.oas.annotations.security.SecurityScheme;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
@OpenAPIDefinition(
		security = @SecurityRequirement(name = "BasicAuth")
)
@SecurityScheme(
		name = "BasicAuth",
		type = SecuritySchemeType.HTTP,
		scheme = "basic"
)
public class ShopsystemApplication {

	public static void main(String[] args) {
		SpringApplication.run(ShopsystemApplication.class, args);
	}

}
