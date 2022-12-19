-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 19-12-2022 a las 03:00:48
-- Versión del servidor: 10.4.25-MariaDB
-- Versión de PHP: 8.1.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `noter`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `auth_group`
--

CREATE TABLE `auth_group` (
  `id` int(11) NOT NULL,
  `name` varchar(150) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `auth_group_permissions`
--

CREATE TABLE `auth_group_permissions` (
  `id` bigint(20) NOT NULL,
  `group_id` int(11) NOT NULL,
  `permission_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `auth_permission`
--

CREATE TABLE `auth_permission` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `content_type_id` int(11) NOT NULL,
  `codename` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `auth_permission`
--

INSERT INTO `auth_permission` (`id`, `name`, `content_type_id`, `codename`) VALUES
(1, 'Can add log entry', 1, 'add_logentry'),
(2, 'Can change log entry', 1, 'change_logentry'),
(3, 'Can delete log entry', 1, 'delete_logentry'),
(4, 'Can view log entry', 1, 'view_logentry'),
(5, 'Can add permission', 2, 'add_permission'),
(6, 'Can change permission', 2, 'change_permission'),
(7, 'Can delete permission', 2, 'delete_permission'),
(8, 'Can view permission', 2, 'view_permission'),
(9, 'Can add group', 3, 'add_group'),
(10, 'Can change group', 3, 'change_group'),
(11, 'Can delete group', 3, 'delete_group'),
(12, 'Can view group', 3, 'view_group'),
(13, 'Can add user', 4, 'add_user'),
(14, 'Can change user', 4, 'change_user'),
(15, 'Can delete user', 4, 'delete_user'),
(16, 'Can view user', 4, 'view_user'),
(17, 'Can add content type', 5, 'add_contenttype'),
(18, 'Can change content type', 5, 'change_contenttype'),
(19, 'Can delete content type', 5, 'delete_contenttype'),
(20, 'Can view content type', 5, 'view_contenttype'),
(21, 'Can add session', 6, 'add_session'),
(22, 'Can change session', 6, 'change_session'),
(23, 'Can delete session', 6, 'delete_session'),
(24, 'Can view session', 6, 'view_session'),
(25, 'Can add Heroe', 7, 'add_user'),
(26, 'Can change Heroe', 7, 'change_user'),
(27, 'Can delete Heroe', 7, 'delete_user'),
(28, 'Can view Heroe', 7, 'view_user'),
(29, 'Can add Heroe', 8, 'add_notes'),
(30, 'Can change Heroe', 8, 'change_notes'),
(31, 'Can delete Heroe', 8, 'delete_notes'),
(32, 'Can view Heroe', 8, 'view_notes'),
(33, 'Can add Token', 9, 'add_token'),
(34, 'Can change Token', 9, 'change_token'),
(35, 'Can delete Token', 9, 'delete_token'),
(36, 'Can view Token', 9, 'view_token'),
(37, 'Can add token', 10, 'add_tokenproxy'),
(38, 'Can change token', 10, 'change_tokenproxy'),
(39, 'Can delete token', 10, 'delete_tokenproxy'),
(40, 'Can view token', 10, 'view_tokenproxy'),
(41, 'Can add Token', 11, 'add_myowntoken'),
(42, 'Can change Token', 11, 'change_myowntoken'),
(43, 'Can delete Token', 11, 'delete_myowntoken'),
(44, 'Can view Token', 11, 'view_myowntoken'),
(45, 'Can add toDo', 12, 'add_todo'),
(46, 'Can change toDo', 12, 'change_todo'),
(47, 'Can delete toDo', 12, 'delete_todo'),
(48, 'Can view toDo', 12, 'view_todo'),
(49, 'Can add toDo', 13, 'add_item'),
(50, 'Can change toDo', 13, 'change_item'),
(51, 'Can delete toDo', 13, 'delete_item'),
(52, 'Can view toDo', 13, 'view_item');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `auth_user`
--

CREATE TABLE `auth_user` (
  `id` int(11) NOT NULL,
  `password` varchar(128) NOT NULL,
  `last_login` datetime(6) DEFAULT NULL,
  `is_superuser` tinyint(1) NOT NULL,
  `username` varchar(150) NOT NULL,
  `first_name` varchar(150) NOT NULL,
  `last_name` varchar(150) NOT NULL,
  `email` varchar(254) NOT NULL,
  `is_staff` tinyint(1) NOT NULL,
  `is_active` tinyint(1) NOT NULL,
  `date_joined` datetime(6) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `auth_user`
--

INSERT INTO `auth_user` (`id`, `password`, `last_login`, `is_superuser`, `username`, `first_name`, `last_name`, `email`, `is_staff`, `is_active`, `date_joined`) VALUES
(1, 'pbkdf2_sha256$260000$WpRSTBsfpKAsPGjpOXdThr$o+38ebd7AIjMgVvvH/dPAbmq5J9THSRYo8jr8hzhc+Q=', '2022-12-04 00:50:50.962164', 1, 'milagros', '', '', 'milimolinaa@hotmail.com', 1, 1, '2022-12-04 00:50:39.641101'),
(3, 'pbkdf2_sha256$260000$QQGkZpLc7H5uJHnnWvcgkb$OuO916ulDDspNp/jNZrFFTR2p01ovtb3C1n2CUm1ANw=', NULL, 1, 'milagrosjm', '', '', 'milimolina@gmail.com', 1, 1, '2022-12-10 21:56:25.945951');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `django_admin_log`
--

CREATE TABLE `django_admin_log` (
  `id` int(11) NOT NULL,
  `action_time` datetime(6) NOT NULL,
  `object_id` longtext DEFAULT NULL,
  `object_repr` varchar(200) NOT NULL,
  `action_flag` smallint(5) UNSIGNED NOT NULL CHECK (`action_flag` >= 0),
  `change_message` longtext NOT NULL,
  `content_type_id` int(11) DEFAULT NULL,
  `user_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `django_admin_log`
--

INSERT INTO `django_admin_log` (`id`, `action_time`, `object_id`, `object_repr`, `action_flag`, `change_message`, `content_type_id`, `user_id`) VALUES
(1, '2022-12-04 01:06:29.124776', 'milagrosjm', 'milagros', 1, '[{\"added\": {}}]', 7, 1),
(2, '2022-12-04 22:38:16.038853', '1', '1', 1, '[{\"added\": {}}]', 8, 1),
(3, '2022-12-05 01:10:07.878998', '2', '2', 1, '[{\"added\": {}}]', 8, 1),
(4, '2022-12-05 01:10:38.292317', '2', '2', 3, '', 8, 1),
(5, '2022-12-05 01:10:43.525053', '1', '1', 3, '', 8, 1),
(6, '2022-12-05 01:17:34.335608', '1', 'Primer nota', 1, '[{\"added\": {}}]', 8, 1),
(7, '2022-12-05 01:17:58.669950', '2', 'Segunda nota', 1, '[{\"added\": {}}]', 8, 1),
(8, '2022-12-07 02:25:42.001405', '3', 'Tercer notita', 1, '[{\"added\": {}}]', 8, 1),
(9, '2022-12-14 12:09:17.289687', 'mromero', 'Marcos', 1, '[{\"added\": {}}]', 7, 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `django_content_type`
--

CREATE TABLE `django_content_type` (
  `id` int(11) NOT NULL,
  `app_label` varchar(100) NOT NULL,
  `model` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `django_content_type`
--

INSERT INTO `django_content_type` (`id`, `app_label`, `model`) VALUES
(1, 'admin', 'logentry'),
(3, 'auth', 'group'),
(2, 'auth', 'permission'),
(4, 'auth', 'user'),
(9, 'authtoken', 'token'),
(10, 'authtoken', 'tokenproxy'),
(5, 'contenttypes', 'contenttype'),
(13, 'Item', 'item'),
(8, 'notes', 'notes'),
(6, 'sessions', 'session'),
(12, 'toDo', 'todo'),
(11, 'user', 'myowntoken'),
(7, 'user', 'user');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `django_migrations`
--

CREATE TABLE `django_migrations` (
  `id` bigint(20) NOT NULL,
  `app` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `applied` datetime(6) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `django_migrations`
--

INSERT INTO `django_migrations` (`id`, `app`, `name`, `applied`) VALUES
(1, 'contenttypes', '0001_initial', '2022-12-04 00:49:00.034289'),
(2, 'auth', '0001_initial', '2022-12-04 00:49:00.694177'),
(3, 'admin', '0001_initial', '2022-12-04 00:49:00.886620'),
(4, 'admin', '0002_logentry_remove_auto_add', '2022-12-04 00:49:00.938314'),
(5, 'admin', '0003_logentry_add_action_flag_choices', '2022-12-04 00:49:00.979525'),
(6, 'contenttypes', '0002_remove_content_type_name', '2022-12-04 00:49:01.116250'),
(7, 'auth', '0002_alter_permission_name_max_length', '2022-12-04 00:49:01.229528'),
(8, 'auth', '0003_alter_user_email_max_length', '2022-12-04 00:49:01.283824'),
(9, 'auth', '0004_alter_user_username_opts', '2022-12-04 00:49:01.329333'),
(10, 'auth', '0005_alter_user_last_login_null', '2022-12-04 00:49:01.435080'),
(11, 'auth', '0006_require_contenttypes_0002', '2022-12-04 00:49:01.444587'),
(12, 'auth', '0007_alter_validators_add_error_messages', '2022-12-04 00:49:01.461701'),
(13, 'auth', '0008_alter_user_username_max_length', '2022-12-04 00:49:01.497800'),
(14, 'auth', '0009_alter_user_last_name_max_length', '2022-12-04 00:49:01.530034'),
(15, 'auth', '0010_alter_group_name_max_length', '2022-12-04 00:49:01.564726'),
(16, 'auth', '0011_update_proxy_permissions', '2022-12-04 00:49:01.587574'),
(17, 'auth', '0012_alter_user_first_name_max_length', '2022-12-04 00:49:01.620549'),
(18, 'notes', '0001_initial', '2022-12-04 00:49:01.661983'),
(19, 'sessions', '0001_initial', '2022-12-04 00:49:01.716863'),
(20, 'user', '0001_initial', '2022-12-04 00:49:01.761964'),
(21, 'user', '0002_alter_user_options', '2022-12-04 01:03:26.313693'),
(22, 'notes', '0002_auto_20221203_2203', '2022-12-04 01:03:26.415560'),
(23, 'notes', '0003_notes_tittle', '2022-12-05 01:15:34.356262'),
(24, 'notes', '0004_alter_notes_tittle', '2022-12-05 01:16:49.232732'),
(25, 'notes', '0005_auto_20221206_2324', '2022-12-07 02:24:30.266462'),
(26, 'authtoken', '0001_initial', '2022-12-10 18:31:25.366929'),
(27, 'authtoken', '0002_auto_20160226_1747', '2022-12-10 18:31:25.413793'),
(28, 'authtoken', '0003_tokenproxy', '2022-12-10 18:31:25.413793'),
(29, 'user', '0003_auto_20221210_1606', '2022-12-10 19:06:26.591614'),
(30, 'user', '0004_alter_user_password', '2022-12-10 20:59:30.160028'),
(31, 'user', '0005_alter_user_managers', '2022-12-10 21:43:35.456849'),
(32, 'user', '0002_user_is_bool', '2022-12-11 19:25:01.947288'),
(33, 'user', '0003_rename_is_active_user_is_activeted', '2022-12-11 19:27:24.724979'),
(34, 'user', '0004_auto_20221211_1627', '2022-12-11 19:28:00.409099'),
(35, 'user', '0005_myowntoken', '2022-12-11 21:08:52.692476'),
(36, 'notes', '0002_rename_user_notes_user_id', '2022-12-13 14:51:08.953907'),
(37, 'notes', '0003_rename_user_id_notes_user', '2022-12-13 14:51:58.814229'),
(38, 'notes', '0004_rename_user_notes_algo', '2022-12-13 14:52:40.977305'),
(39, 'notes', '0005_rename_algo_notes_user', '2022-12-13 14:54:51.021048'),
(40, 'toDo', '0001_initial', '2022-12-14 14:30:21.602350'),
(41, 'Item', '0001_initial', '2022-12-14 14:30:21.643793'),
(42, 'Item', '0002_item_todo', '2022-12-14 14:30:21.723011'),
(43, 'Item', '0003_auto_20221214_1147', '2022-12-14 14:47:36.237794'),
(44, 'toDo', '0002_alter_todo_tittle', '2022-12-15 15:14:08.887866');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `django_session`
--

CREATE TABLE `django_session` (
  `session_key` varchar(40) NOT NULL,
  `session_data` longtext NOT NULL,
  `expire_date` datetime(6) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `django_session`
--

INSERT INTO `django_session` (`session_key`, `session_data`, `expire_date`) VALUES
('4uov9nv3rmgfm7s69gwe4lqxcoyivm0y', '.eJxVjDsOwjAQBe_iGllO_Kek5wzWeteLA8iR4qRC3B0ipYD2zcx7iQTbWtPWy5ImEmcxiNPvlgEfpe2A7tBus8S5rcuU5a7Ig3Z5nak8L4f7d1Ch12-tmXNkYnZF-1FZCujYqYi2QCZnAxvNymdjMZCPpIFtQG0cDmP0xYj3Bw6_OIg:1p1dDW:aYuaCx-QxM_EsrQFcJNQsPvHjtVZ06VcD5jne0ohBfw', '2022-12-18 00:50:50.968171');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `item_item`
--

CREATE TABLE `item_item` (
  `id` int(11) NOT NULL,
  `checked` tinyint(1) NOT NULL,
  `toDo_id` int(11) NOT NULL,
  `text` varchar(500) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `item_item`
--

INSERT INTO `item_item` (`id`, `checked`, `toDo_id`, `text`) VALUES
(32, 0, 83, 'Terminar editar de checklist'),
(33, 0, 83, 'Terminar mostrar detalle checklist'),
(36, 0, 85, 'Terminar edit checklist'),
(37, 1, 85, 'Arreglar fondos'),
(38, 1, 86, 'Agregar editar?'),
(39, 0, 86, 'Terminar el toDo'),
(40, 0, 86, 'nuevo item'),
(41, 0, 86, 'otro item'),
(42, 0, 86, 'item'),
(43, 0, 86, 'i'),
(44, 0, 86, 'u'),
(47, 0, 88, 'primer item'),
(48, 0, 89, 'Revisar codigo'),
(49, 0, 89, 'Agregar comentarios'),
(50, 0, 87, 'Borrar lineas comentadas'),
(51, 0, 87, 'Eliminar espacios'),
(52, 1, 90, 'limpiar'),
(53, 1, 90, 'ordenar');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `notes_notes`
--

CREATE TABLE `notes_notes` (
  `id` int(11) NOT NULL,
  `text` varchar(1000) NOT NULL,
  `type` int(10) UNSIGNED NOT NULL,
  `user_id` varchar(15) NOT NULL,
  `tittle` varchar(20) NOT NULL
) ;

--
-- Volcado de datos para la tabla `notes_notes`
--

INSERT INTO `notes_notes` (`id`, `text`, `type`, `user_id`, `tittle`) VALUES
(1, 'Agrego esta nota', 1, 'milagrosjm', 'Primer nota'),
(2, 'Esta es mi segunda nota. Cambio minimo.', 1, 'milagrosjm', 'Segunda nota'),
(8, 'Sexta nota desde la pagina', 1, 'milagrosjm', 'Sexta nota'),
(11, 'Primer nota otro usuario', 1, 'amolina', 'Primera nota'),
(13, 'Esta es una prueba', 1, 'milagros', 'Prueba'),
(14, 'Esta nota es de prueba', 1, 'milagros', 'Nota de prueba'),
(20, 'Terminar el trabajo final del PIL', 1, 'milagrosjm', 'Trabajo final PIL'),
(22, 'Esto es una nota', 1, 'milagrosjm', 'Nota'),
(23, 'La entrega del proyecto final es el jueves 15.', 1, 'milagrosjm', 'Entrega final PIL'),
(24, 'Terminar fix.', 1, 'jmolina', 'Cosas del trabajo'),
(25, 'Prueba para ver si funciona el crear nota', 1, 'milagrosjm', 'Nota prueba');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `todo_todo`
--

CREATE TABLE `todo_todo` (
  `id` int(11) NOT NULL,
  `tittle` varchar(35) NOT NULL,
  `user_id` varchar(15) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `todo_todo`
--

INSERT INTO `todo_todo` (`id`, `tittle`, `user_id`) VALUES
(83, 'Test', 'milagrosjm'),
(85, 'Tareas para el proyecto final', 'milagrosjm'),
(86, 'Tareas para finalizar el PIL', 'jmolina'),
(87, 'Tareas para terminar proyecto final', 'jmolina'),
(88, 'Nuevo checklist', 'milagrosjm'),
(89, 'Primer ToDo', 'amolina'),
(90, 'A hacer', 'milagros');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `user_myowntoken`
--

CREATE TABLE `user_myowntoken` (
  `key` varchar(40) NOT NULL,
  `created` datetime(6) NOT NULL,
  `user_id` varchar(15) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `user_myowntoken`
--

INSERT INTO `user_myowntoken` (`key`, `created`, `user_id`) VALUES
('38d2491b45a01356a3f5cdf0fba877e086f4a21c', '2022-12-18 23:28:10.723003', 'milagros'),
('7c927ee9ff3afe68197083ea105dd2324d15e784', '2022-12-18 23:15:47.527479', 'amolina'),
('a9dd31840a4436db7df067b2d8ed090353c1847b', '2022-12-18 23:27:34.370766', 'jmolina'),
('cceb146eb2e46fe7072734070cedbad8cfb63752', '2022-12-18 22:51:25.802332', 'milagrosjm');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `user_user`
--

CREATE TABLE `user_user` (
  `username` varchar(15) NOT NULL,
  `name` varchar(50) NOT NULL,
  `lastname` varchar(50) NOT NULL,
  `email` varchar(70) NOT NULL,
  `password` varchar(150) NOT NULL,
  `is_active` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `user_user`
--

INSERT INTO `user_user` (`username`, `name`, `lastname`, `email`, `password`, `is_active`) VALUES
('amolina', 'Alejandra', 'Molina', 'am@gmail.com', 'aaa111', 0),
('jmolina', 'Julieta', 'Molina', 'jmolina@gmail.com', 'jmolina123', 1),
('milagros', 'Milagros', 'Molina', 'milmol@gmail.com', 'milagros123', 0),
('milagrosjm', 'milagros', 'molina', 'mm@gmail.com', 'm123', 0);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `user_user_user_permissions`
--

CREATE TABLE `user_user_user_permissions` (
  `id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `auth_group`
--
ALTER TABLE `auth_group`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `name` (`name`);

--
-- Indices de la tabla `auth_group_permissions`
--
ALTER TABLE `auth_group_permissions`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `auth_group_permissions_group_id_permission_id_0cd325b0_uniq` (`group_id`,`permission_id`),
  ADD KEY `auth_group_permissio_permission_id_84c5c92e_fk_auth_perm` (`permission_id`);

--
-- Indices de la tabla `auth_permission`
--
ALTER TABLE `auth_permission`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `auth_permission_content_type_id_codename_01ab375a_uniq` (`content_type_id`,`codename`);

--
-- Indices de la tabla `auth_user`
--
ALTER TABLE `auth_user`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `username` (`username`);

--
-- Indices de la tabla `django_admin_log`
--
ALTER TABLE `django_admin_log`
  ADD PRIMARY KEY (`id`),
  ADD KEY `django_admin_log_content_type_id_c4bce8eb_fk_django_co` (`content_type_id`),
  ADD KEY `django_admin_log_user_id_c564eba6_fk_auth_user_id` (`user_id`);

--
-- Indices de la tabla `django_content_type`
--
ALTER TABLE `django_content_type`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `django_content_type_app_label_model_76bd3d3b_uniq` (`app_label`,`model`);

--
-- Indices de la tabla `django_migrations`
--
ALTER TABLE `django_migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `django_session`
--
ALTER TABLE `django_session`
  ADD PRIMARY KEY (`session_key`),
  ADD KEY `django_session_expire_date_a5c62663` (`expire_date`);

--
-- Indices de la tabla `item_item`
--
ALTER TABLE `item_item`
  ADD PRIMARY KEY (`id`),
  ADD KEY `Item_item_toDo_id_a284e593_fk_toDo_todo_id` (`toDo_id`);

--
-- Indices de la tabla `notes_notes`
--
ALTER TABLE `notes_notes`
  ADD PRIMARY KEY (`id`),
  ADD KEY `notes_notes_user_id_e6485e57` (`user_id`);

--
-- Indices de la tabla `todo_todo`
--
ALTER TABLE `todo_todo`
  ADD PRIMARY KEY (`id`),
  ADD KEY `toDo_todo_user_id_c9693f06_fk_user_user_username` (`user_id`);

--
-- Indices de la tabla `user_myowntoken`
--
ALTER TABLE `user_myowntoken`
  ADD PRIMARY KEY (`key`),
  ADD UNIQUE KEY `user_id` (`user_id`);

--
-- Indices de la tabla `user_user`
--
ALTER TABLE `user_user`
  ADD PRIMARY KEY (`username`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `auth_group`
--
ALTER TABLE `auth_group`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `auth_group_permissions`
--
ALTER TABLE `auth_group_permissions`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `auth_permission`
--
ALTER TABLE `auth_permission`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=53;

--
-- AUTO_INCREMENT de la tabla `auth_user`
--
ALTER TABLE `auth_user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `django_admin_log`
--
ALTER TABLE `django_admin_log`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT de la tabla `django_content_type`
--
ALTER TABLE `django_content_type`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT de la tabla `django_migrations`
--
ALTER TABLE `django_migrations`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=45;

--
-- AUTO_INCREMENT de la tabla `item_item`
--
ALTER TABLE `item_item`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=54;

--
-- AUTO_INCREMENT de la tabla `notes_notes`
--
ALTER TABLE `notes_notes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `todo_todo`
--
ALTER TABLE `todo_todo`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=91;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `auth_group_permissions`
--
ALTER TABLE `auth_group_permissions`
  ADD CONSTRAINT `auth_group_permissio_permission_id_84c5c92e_fk_auth_perm` FOREIGN KEY (`permission_id`) REFERENCES `auth_permission` (`id`),
  ADD CONSTRAINT `auth_group_permissions_group_id_b120cbf9_fk_auth_group_id` FOREIGN KEY (`group_id`) REFERENCES `auth_group` (`id`);

--
-- Filtros para la tabla `auth_permission`
--
ALTER TABLE `auth_permission`
  ADD CONSTRAINT `auth_permission_content_type_id_2f476e4b_fk_django_co` FOREIGN KEY (`content_type_id`) REFERENCES `django_content_type` (`id`);

--
-- Filtros para la tabla `django_admin_log`
--
ALTER TABLE `django_admin_log`
  ADD CONSTRAINT `django_admin_log_content_type_id_c4bce8eb_fk_django_co` FOREIGN KEY (`content_type_id`) REFERENCES `django_content_type` (`id`),
  ADD CONSTRAINT `django_admin_log_user_id_c564eba6_fk_auth_user_id` FOREIGN KEY (`user_id`) REFERENCES `auth_user` (`id`);

--
-- Filtros para la tabla `item_item`
--
ALTER TABLE `item_item`
  ADD CONSTRAINT `Item_item_toDo_id_a284e593_fk_toDo_todo_id` FOREIGN KEY (`toDo_id`) REFERENCES `todo_todo` (`id`);

--
-- Filtros para la tabla `notes_notes`
--
ALTER TABLE `notes_notes`
  ADD CONSTRAINT `notes_notes_user_id_e6485e57_fk_user_user_username` FOREIGN KEY (`user_id`) REFERENCES `user_user` (`username`);

--
-- Filtros para la tabla `todo_todo`
--
ALTER TABLE `todo_todo`
  ADD CONSTRAINT `toDo_todo_user_id_c9693f06_fk_user_user_username` FOREIGN KEY (`user_id`) REFERENCES `user_user` (`username`);

--
-- Filtros para la tabla `user_myowntoken`
--
ALTER TABLE `user_myowntoken`
  ADD CONSTRAINT `user_myowntoken_user_id_8713910f_fk_user_user_username` FOREIGN KEY (`user_id`) REFERENCES `user_user` (`username`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
