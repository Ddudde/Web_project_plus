package ru.mirea.tychast;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

/** Класс - точка входа в приложение. */
@SpringBootApplication
@ComponentScan
public class TychastApplication {

	/**
	 * Точка входа.
	 * @param args аргументы
	 */
	public static void main(String[] args) {
		SpringApplication.run(TychastApplication.class, args);
	}

}
