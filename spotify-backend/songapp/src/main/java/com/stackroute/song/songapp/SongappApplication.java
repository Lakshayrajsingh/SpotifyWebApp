package com.stackroute.song.songapp;

import com.stackroute.song.songapp.filter.JwtFilter;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.web.servlet.FilterRegistrationBean;
import org.springframework.context.annotation.Bean;
import org.springframework.core.Ordered;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
import org.springframework.web.filter.CorsFilter;

@SpringBootApplication
public class SongappApplication {

	public static void main(String[] args) {
		SpringApplication.run(SongappApplication.class, args);
	}

	@Bean
	public FilterRegistrationBean filterUrl(){
		FilterRegistrationBean frb = new FilterRegistrationBean();
		frb.setFilter(new JwtFilter());

		frb.addUrlPatterns("/song-app-v1/get-all-users","/song-app-v1/get-user-details",
				"/song-app-v1/add-song-to-playlist","/song-app-v1/admin/add-new-product",
				"/song-app-v1/admin/delete-product","/song-app-v1/admin/update-product");
		return frb;
	}

	@Bean
	public FilterRegistrationBean filterRegistrationBean(){
		final CorsConfiguration config = new CorsConfiguration();
		config.setAllowCredentials(true);
		config.addAllowedOrigin("http://localhost:4200");
		config.addAllowedHeader("*");
		config.addAllowedMethod("*");
		final UrlBasedCorsConfigurationSource source =new UrlBasedCorsConfigurationSource();
		source.registerCorsConfiguration("/**",config);
		FilterRegistrationBean bean = new FilterRegistrationBean(new CorsFilter(source));
		bean.setOrder(Ordered.HIGHEST_PRECEDENCE);
		return bean;
	}
}
