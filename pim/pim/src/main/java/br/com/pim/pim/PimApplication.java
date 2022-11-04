package br.com.pim.pim;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@SpringBootApplication
@EntityScan(basePackages = {"com.fvthree.domain" })
@EnableJpaRepositories(basePackages = {"com.fvthree.repository"})
public class PimApplication {

	public static void main(String[] args) {
		SpringApplication.run(PimApplication.class, args);
	}

}