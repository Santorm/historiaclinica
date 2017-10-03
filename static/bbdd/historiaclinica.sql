-- phpMyAdmin SQL Dump
-- version 4.6.5.2
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 27-08-2017 a las 16:43:00
-- Versión del servidor: 10.1.21-MariaDB
-- Versión de PHP: 5.6.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `historiaclinica`
--
CREATE DATABASE IF NOT EXISTS `historiaclinica` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;
USE `historiaclinica`;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `paciente`
--

DROP TABLE IF EXISTS `paciente`;
CREATE TABLE `paciente` (
  `id_persona` int(11) NOT NULL,
  `nombre` varchar(45) NOT NULL,
  `apellidos` varchar(100) NOT NULL,
  `ciudad` varchar(100) CHARACTER SET utf8 NOT NULL,
  `email` varchar(100) DEFAULT NULL,
  `timestamp` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `tipousuario` char(2) DEFAULT NULL,
  `historiaclinica` varchar(10) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 ROW_FORMAT=COMPACT;

--
-- Volcado de datos para la tabla `paciente`
--

INSERT INTO `paciente` (`id_persona`, `nombre`, `apellidos`, `ciudad`, `email`, `timestamp`, `tipousuario`, `historiaclinica`) VALUES
(64, 'Pepe', 'Viyuela', '', 'pepe@mail.com', '2016-05-20 14:53:31', NULL, ''),
(66, 'Administrador', 'LP', '', 'lunapiel@gmail.com', '2016-05-20 15:40:35', 'AD', ''),
(69, 'Santiago', 'Rueda', '', 'santo@mail.com', '2017-05-09 11:03:59', NULL, '23'),
(70, 'Jorge', 'Drexler', '', 'dere@fsrs.com', '2017-05-09 11:24:48', NULL, ''),
(74, 'Drecla', 'sdgs', '', 'dfgs@vgd.com', '2017-05-09 11:26:49', NULL, ''),
(75, 'Ursua ', 'Mendez', '', 'ursu@mail.com', '2017-05-09 11:31:21', NULL, ''),
(76, 'Marta', 'Cazar', '', 'marta@hotmail.com', '2017-05-10 09:09:57', NULL, ''),
(79, 'kjgjh', 'jkhkh', '', 'fhgf@kjhkj.com', '2017-05-10 09:19:44', NULL, ''),
(80, 'ssssss', 'ssss', 'ssss', 'ssss', '2017-08-13 12:04:34', NULL, NULL),
(81, 'Mariela', 'Brito', 'BCN', 'mr@fsdf.com', '2017-08-13 17:32:35', NULL, NULL),
(83, 'Mario', 'Lolo', 'BCN', 'mr@fsdf.comm', '2017-08-13 17:33:49', NULL, NULL),
(84, 'Mariela', 'Andrade', 'BCN', 'mr@fsdf.comma', '2017-08-13 17:34:20', NULL, NULL),
(85, 'Joha', 'Brito', 'BCN', 'dhfksh', '2017-08-13 17:35:13', NULL, NULL),
(87, 'Gsgsd', 'Brinca', 'sfg', 'sdgsdg', '2017-08-13 17:36:28', NULL, NULL),
(88, '', '', '', '', '2017-08-17 19:39:25', NULL, NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuario`
--

DROP TABLE IF EXISTS `usuario`;
CREATE TABLE `usuario` (
  `id_persona` int(11) NOT NULL,
  `usuario` varchar(100) NOT NULL,
  `nombre` varchar(45) NOT NULL,
  `apellidos` varchar(100) NOT NULL,
  `Ciudad` varchar(100) CHARACTER SET utf8 NOT NULL,
  `email` varchar(100) DEFAULT NULL,
  `password` varchar(10) DEFAULT NULL,
  `timestamp` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `tipousuario` char(2) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 ROW_FORMAT=COMPACT;

--
-- Volcado de datos para la tabla `usuario`
--

INSERT INTO `usuario` (`id_persona`, `usuario`, `nombre`, `apellidos`, `Ciudad`, `email`, `password`, `timestamp`, `tipousuario`) VALUES
(64, '123456789', 'Pepe', 'Viyuela', '', 'pepe@mail.com', 'pepe', '2016-05-20 14:53:31', NULL),
(66, 'admin', 'Administrador', 'LP', '', 'lunapiel@gmail.com', 'admin', '2016-05-20 15:40:35', 'AD'),
(69, '1111', 'Santiago', 'Rueda', '', 'santo@mail.com', '2222', '2017-05-09 11:03:59', NULL),
(70, 'Jorge', 'Jorge', 'Drexler', '', 'dere@fsrs.com', '1111', '2017-05-09 11:24:48', NULL),
(74, 'cvcv', 'Drecla', 'sdgs', '', 'dfgs@vgd.com', 'sdgsd', '2017-05-09 11:26:49', NULL),
(75, 'Ursua', 'Ursua ', 'Mendez', '', 'ursu@mail.com', 'ursu', '2017-05-09 11:31:21', NULL),
(76, 'Marta', 'Marta', 'Cazar', '', 'marta@hotmail.com', 'Marta', '2017-05-10 09:09:57', NULL),
(79, 'cbncvnc', 'kjgjh', 'jkhkh', '', 'fhgf@kjhkj.com', 'skjfh', '2017-05-10 09:19:44', NULL);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `paciente`
--
ALTER TABLE `paciente`
  ADD PRIMARY KEY (`id_persona`),
  ADD UNIQUE KEY `email` (`email`);

--
-- Indices de la tabla `usuario`
--
ALTER TABLE `usuario`
  ADD PRIMARY KEY (`id_persona`),
  ADD UNIQUE KEY `nif_UNIQUE` (`usuario`),
  ADD UNIQUE KEY `email` (`email`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `paciente`
--
ALTER TABLE `paciente`
  MODIFY `id_persona` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=89;
--
-- AUTO_INCREMENT de la tabla `usuario`
--
ALTER TABLE `usuario`
  MODIFY `id_persona` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=80;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
