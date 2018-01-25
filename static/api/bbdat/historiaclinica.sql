-- phpMyAdmin SQL Dump
-- version 4.6.5.2
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 25-01-2018 a las 11:25:37
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
-- Estructura de tabla para la tabla `fotografias`
--

DROP TABLE IF EXISTS `fotografias`;
CREATE TABLE `fotografias` (
  `id_foto` int(11) NOT NULL,
  `nombre` varchar(20) NOT NULL,
  `ruta` varchar(100) NOT NULL,
  `toma` varchar(100) NOT NULL,
  `id_persona` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `fotografias`
--

INSERT INTO `fotografias` (`id_foto`, `nombre`, `ruta`, `toma`, `id_persona`) VALUES
(102, 'pic4.jpg', 'picsloaded/92/pic4.jpg', 'perfil derecho', 92),
(103, 'pic5.jpg', 'picsloaded/92/pic5.jpg', 'perfil derecho', 92),
(104, 'pic6.jpg', 'picsloaded/92/pic6.jpg', 'perfil derecho', 92),
(105, 'pic7.jpg', 'picsloaded/92/pic7.jpg', 'perfil derecho', 92),
(106, 'pic8.jpg', 'picsloaded/92/pic8.jpg', 'perfil derecho', 92),
(107, 'Chrysanthemum.jpg', 'picsloaded/93/Chrysanthemum.jpg', 'perfil derecho', 93),
(108, 'Desert.jpg', 'picsloaded/93/Desert.jpg', 'perfil derecho', 93),
(109, 'Koala.jpg', 'picsloaded/93/Koala.jpg', 'perfil derecho', 93),
(110, 'Lighthouse.jpg', 'picsloaded/93/Lighthouse.jpg', 'perfil derecho', 93),
(111, 'aurora-gata-princesa', 'picsloaded/93/aurora-gata-princesa-3.jpg', 'perfil derecho', 93),
(112, 'Jellyfish.jpg', 'picsloaded/93/Jellyfish.jpg', 'perfil derecho', 93),
(113, 'Lighthouse.jpg', 'picsloaded/93/Lighthouse.jpg', 'perfil derecho', 93),
(114, 'CIMG0440.jpg', 'picsloaded/93/CIMG0440.jpg', 'perfil derecho', 93),
(115, '83454812.jpg', 'picsloaded/93/83454812.jpg', 'perfil derecho', 93),
(116, 'Hydrangeas.jpg', 'picsloaded/94/Hydrangeas.jpg', 'perfil derecho', 94),
(117, 'Jellyfish.jpg', 'picsloaded/94/Jellyfish.jpg', 'perfil derecho', 94);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `fotos`
--

DROP TABLE IF EXISTS `fotos`;
CREATE TABLE `fotos` (
  `id_fotos` int(10) NOT NULL,
  `nombre` varchar(20) NOT NULL,
  `url` varchar(1000) NOT NULL,
  `ancho` int(10) NOT NULL,
  `alto` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `paciente`
--

DROP TABLE IF EXISTS `paciente`;
CREATE TABLE `paciente` (
  `id_persona` int(11) NOT NULL,
  `nombre` varchar(45) NOT NULL,
  `apellidos` varchar(100) NOT NULL,
  `fecha_nacimiento` date NOT NULL,
  `telefono` varchar(15) DEFAULT NULL,
  `ciudad` varchar(100) CHARACTER SET utf8 NOT NULL,
  `email` varchar(100) DEFAULT NULL,
  `timestamp` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `tipousuario` char(2) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 ROW_FORMAT=COMPACT;

--
-- Volcado de datos para la tabla `paciente`
--

INSERT INTO `paciente` (`id_persona`, `nombre`, `apellidos`, `fecha_nacimiento`, `telefono`, `ciudad`, `email`, `timestamp`, `tipousuario`) VALUES
(92, 'Santiago', 'Rueda Montoya', '1982-02-08', '6576425', 'Barcelona', 'santo@mail.com', '2017-09-19 18:42:46', NULL),
(93, 'Mariela', 'Brito Luna', '1984-04-16', '77345398', 'Barcelona', 'gata@mail.com', '2017-09-19 18:43:32', NULL),
(94, 'Johana', 'Brito Luna', '1980-09-08', '24524622t', 'Quito', 'joy@mail.com', '2017-09-19 18:44:01', NULL),
(95, 'Miriam', 'LUNA CORDOVA', '1956-09-08', '4623476357', 'Ambato', 'miri@mail.com', '2017-09-19 18:44:27', NULL);

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
-- Indices de la tabla `fotografias`
--
ALTER TABLE `fotografias`
  ADD PRIMARY KEY (`id_foto`),
  ADD KEY `id_persona` (`id_persona`);

--
-- Indices de la tabla `fotos`
--
ALTER TABLE `fotos`
  ADD PRIMARY KEY (`id_fotos`);

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
-- AUTO_INCREMENT de la tabla `fotografias`
--
ALTER TABLE `fotografias`
  MODIFY `id_foto` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=118;
--
-- AUTO_INCREMENT de la tabla `fotos`
--
ALTER TABLE `fotos`
  MODIFY `id_fotos` int(10) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT de la tabla `paciente`
--
ALTER TABLE `paciente`
  MODIFY `id_persona` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=96;
--
-- AUTO_INCREMENT de la tabla `usuario`
--
ALTER TABLE `usuario`
  MODIFY `id_persona` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=80;
--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `fotografias`
--
ALTER TABLE `fotografias`
  ADD CONSTRAINT `fotografias_ibfk_1` FOREIGN KEY (`id_persona`) REFERENCES `paciente` (`id_persona`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
