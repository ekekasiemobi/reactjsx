#include "main.h"
#include <stdio.h>
#include <stdarg.h>
#include <string.h>

/**
 * _printf - produces output accourding to format
 * @format: string, first argument
 * Return: length of format
 */

int _printf(const char *format, ...)
{
	va_list ap;
	int len = 0;
	int i = 0;
	int j = 0;
	int is_identifier = 0;
	function_t list[] = {
		{"s", print_string},
		{"c", print_char},
		{"i", printi},
		{"d", printi},
		{"b", int_to_bin},
		{NULL, NULL},
	};

	if (format == NULL)
	{
		exit(1);
	}

	va_start(ap, format);

	while (format[i] != '\0')
	{
		if (format[i] != '%')
		{
			len += _putchar(format[i]);
		}
		else
		{
			i++;
		}
	}
}

