#include "main.h"
#include <stdio.h>

/**
 * _printf - prints the fuction f
 * @format: takes the argument
 * Return: return 0 always
 */

int _printf(const char *format, ...)

{
	int i;

	for (i = 0; format[i] != '\0'; i++)
	{
		putchar (format[i]);

	}

	return (0);
}
